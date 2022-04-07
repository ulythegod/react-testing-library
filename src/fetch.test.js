//импорт зависимостей
import React from 'react';

//импорт API функций из Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

//импорт методов тестирования реакта
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

//добавление кастомных мэтчеров из jest-dom
import '@testing-library/jest-dom';
//компонент для тестирования
import Fetch from './fetch';

//объявить какие API запросы нужно иммитировать
const server = setupServer(
    //захват гет-запроса /greeting
    rest.get('/greeting', (req, res, ctx) => {
        //использование ответа - иммтация JSON body
        return res(ctx.json({greeting: 'hello there'}))
    }),
)

//установка иммитирующего API перед всеми тестами
beforeAll(() => server.listen())
//сброс любых хэндлеров запросов, которые объявлены как часть наших тестов
//(т.е для тестирования сценариев разных ошибок)
afterEach(() => server.resetHandlers())
//очистка, когда тесты заканчиваются
afterAll(() => server.close())

test('handlers server error', async () => {
    server.use(
        //перегрузка исходного хендлера запроса "GET /greeting"
        //для возвращения 500 ошибки сервера
        rest.get('/greeting', (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )
})

test('loads and displays greeting', async () => {
    // Arrange
    //рендер-метод рендерит реакт элемент в дом
    render(<Fetch url="greeting" />)

    // Act
    //метод fireEvent позволяет запускать события для симуляции действий пользователя
    fireEvent.click(screen.getByText('Load Greeting'))

    //ожидание пока гет-запрос разрешит промис и
    //компонент вызовет setState и перерендерится
    //waitFor ждет пока коллбэк не выбросит ошибку

    await waitFor(() =>
        //getByRole выбрасывает ошибку если не возможно найти элемент
        screen.getByRole('heading')
    )

    // Assert
    //предположение, что сообщение является правильным
    //toHaveTextContent - кастомный мэтчер из jest-dom
    expect(screen.getByRole('alert')).toHaveTextContent('Oops failed to fetch!')

    //предположение, что кнопка не неактивна
    //toBeDisabled - кастомный мэтчер из jest-dom
    expect(screen.getByRole('button')).not.toBeDisabled()
})