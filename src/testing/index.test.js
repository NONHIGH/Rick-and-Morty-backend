const app = require('../app');
const request = require('supertest');
const agent = request(app);
//los test se podran realizar con npx jest

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        test('Response with status 200', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
        test('Response an object with the properties:"id", "name", "species","gender","origin","status" and  "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            const props = ["id", "name", "species", "gender", "origin", "status", "image"];
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop);
            })
        });
        test('If have an error response with status: 500', async () => {
            await agent.get('/rickandmorty/character/900').expect(500);
        })
    })
});
describe('GET/ rickandmorty/login', () => {
    test('If the userdata is correct,...', async () => {
        const access = { access: true };
        const response = await agent.get('/rickandmorty/login?email=angelones1_25@gmail.com&password=Carade12');
        expect(response.body).toEqual(access);
    })
    test('if the userdata is incorrect : ', async () => {
        const access = { access: false };
        const response = await agent.get('/rickandmorty/login?email=angelones1_25@gmail.com&password=arade12');
        expect(response.body).toEqual(access);
    })
});
let character;
let character2;

beforeEach(() => {
    character = {
        id: 1,
        name: "Jose",
        species: "Human",
        gender: "Male",
        origin: "Alive",
        status: 'Earth',
        image: "xd..."
    }
    character2 = {
        id: 2,
        name: "Bru",
        species: "Human",
        gender: "Male",
        origin: "Alive",
        status: 'Earth',
        image: "xd..."
    }
})
describe('POST /rickandmorty/fav', () => {

    test('the sended by body, must return an array ', async () => {
        const response = await agent.post('/rickandmorty/fav').send(character);
        expect(response.body).toContainEqual(character)
    });
    test('Return the element previus send', async () => {
        const response = await agent.post('/rickandmorty/fav').send(character2);
        expect(response.body).toContainEqual(character);
        expect(response.body).toContainEqual(character2);

    });
});

describe('DELETE /rickandmorty/fav/:id', () => {
    test('Return a array if not delete someone character', async () => {
        const response = await agent.delete('/rickandmorty/fav/999');
        expect(response.body).toContainEqual(character);
        expect(response.body).toContainEqual(character2);
    })
    test('Delete successfully to the character with the ID specified', async () => {
        const response = await agent.delete('/rickandmorty/fav/1');
        expect(response.body).not.toContainEqual(character)
    })
})