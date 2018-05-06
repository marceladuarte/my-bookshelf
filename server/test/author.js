var app = require('../../app');
var database = require('../config/database');
var supertest = require('supertest');
var request = supertest(app);
var assert = require('assert');


describe('AuthorsController', function(){

    var julioVerne = {'name': 'Julio Verne'};

    beforeEach(function(done){
        Promise.resolve(database).then(function(database){
            database.connection.collections['authors'].remove(function() {});
        });
        done();
    });

    function saveAuthor(author){
        return request.post('/api/authors').send(author);
    }

    it("should list the authors", function(done){
        saveAuthor(julioVerne).end((err, res) => {
            request.get('/api/authors')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                assert(res.body.length, 1);
                done();
            });
        });
    });

    it("should get an author by id", function(done){
        saveAuthor(julioVerne).end((err, res) => {
            request.get(`/api/authors/${res.body._id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                assert(res.body.name, julioVerne.name);
                done();
            });
        });
    });

    it("should create a new author", function(done){
        saveAuthor(julioVerne)
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            assert(res.body.name, julioVerne.name);
            done();
        });
    });

    it("should update an author", function(done){
        saveAuthor(julioVerne).end((err, res) => {
            franzKafka = res.body;
            franzKafka.name = 'Franz Kafka';
            
            request.put(`/api/authors/${franzKafka._id}`)
            .send(franzKafka)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                assert(res.body.name, franzKafka.name);
                done();
            });
        });
    });

    it("should delete an author", function(done){
        saveAuthor(julioVerne).end((err, res) => {
            author = res.body;
                
            request.delete(`/api/authors/${author._id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                assert(res.body.name, julioVerne.name);
                done();
            });
        })
    });
});