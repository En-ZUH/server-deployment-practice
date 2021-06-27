'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

// test('adds 1+2 equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

describe('API Server', () => {
    it('invalid requests', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });

    it('invalid requests', async () => {
        const response = await request.get('/55555');
        expect(response.status).toEqual(404);
    });

    it('error 2', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });


    it('success', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    });
});