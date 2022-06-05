const request = require("supertest");
const app = require("../app");
const User = require('../models/User');

describe('Post Request', () => {
    test('responds to add user with valid credentials', async () => {
        const resp_post = await request(app).post("/users").send({
            identifier: 398753,
            firstName: 'Foulen3',
            lastName: 'Ben Foulen3',
            emailAddress: 'Foulen3@gmail.com',
            password:'Foulenn5',
        });
        expect(resp_post.statusCode).toEqual(200);
    });
    test('responds to add user with existing email address',async () => {
        let new_user ={   identifier: 398753,
            firstName: 'Foulen3',
            lastName: 'Ben Foulen3',
            emailAddress: 'Foulen3@gmail.com',
            password:'Foulen3',
        }
        const res = await request(app).post("/users").send(new_user);
        expect(res.statusCode).toEqual(500);
    });
    test('responds to add user with invalid email',async () => {
        let new_user ={   identifier: 398753,
            firstName: 'Foulen3',
            lastName: 'Ben Foulen3',
            emailAddress: 'Foulen3@',
            password:'Foulen',
        }
        const res = await request(app).post("/users").send(new_user);
        expect(res.statusCode).toEqual(500);
    });
    test('responds to add user with invalid password',async () => {
        let new_user ={   identifier: 398753,
            firstName: 'Foulen3',
            lastName: 'Ben Foulen3',
            emailAddress: 'Foulen3@gmail.com',
            password:'Foulen',
        }
        const res = await request(app).post("/users").send(new_user);
        expect(res.statusCode).toEqual(500);
    });
})
describe('Get Request', function () {

    test('responds to get users', async () => {
        const res = await request(app).get("/users");
        expect(res.length).toBe(1)
        expect(res.statusCode).toEqual(200);
    });
    test('responds to get users by identifier', async () => {
        const res = await request(app).get(`/users/get-user/398753`);
        expect(res.body).toHaveProperty("firstName");
        expect(res.body.firstName).toBe("Foulen3");
        expect(res.statusCode).toEqual(200);
    });

})
describe('Delete Request', () => {
    test('responds to delete user', async () => {
        const res_post = await request(app).delete(`/users/398753`);
        expect(res_post.statusCode).toEqual(200);

    });
})
