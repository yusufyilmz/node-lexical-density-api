const { app } = require('../server.js');
const expect = require('expect');
const request = require('supertest');
const { lexicalDensityTestData, nonLexicalWordTestData } = require('./seed/seed.js')

describe('POST /complexity', () => {
    it('should calculate lexical density for one sentence', (done) => {

        request(app)
            .post(`/complexity`)
            .send({
                text: lexicalDensityTestData.sentence,
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.data).toEqual(lexicalDensityTestData.density);
            })
            .end(done);
    });
    it('should calculate lexical density for multiple sentence', (done) => {

        request(app)
            .post(`/complexity`)
            .send({
                text: lexicalDensityTestData.multipleSentence,
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.data).toEqual(lexicalDensityTestData.density);
            })
            .end(done);
    });

    it('should not calculate lexical density because of wrong input', (done) => {
        request(app)
            .post(`/complexity`)
            .send({
                text: lexicalDensityTestData.integerText,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.stringError);
            })
            .end(done);
    });

    it('should not calculate lexical density because of much character', (done) => {

        request(app)
            .post(`/complexity`)
            .send({
                text: lexicalDensityTestData.muchCharacter,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.muchCharacterError);
            })
            .end(done);
    });

    it('should not calculate lexical density because of much word', (done) => {

        request(app)
            .post(`/complexity`)
            .send({
                text: lexicalDensityTestData.muchWord,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.muchWordError);
            })
            .end(done);
    });
});


describe('POST /complexity?mode=verbose', () => {
    it('should calculate vlexical density for multiple sentence in verbose mode', (done) => {
        request(app)
            .post(`/complexity?mode=verbose`)
            .send({
                text: lexicalDensityTestData.multipleSentence,
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.data).toEqual(lexicalDensityTestData.verboseDensity);
            })
            .end(done);
    });

    it('should calculate lexical density for one sentence in verbose mode', (done) => {
        request(app)
            .post(`/complexity?mode=verbose`)
            .send({
                text: lexicalDensityTestData.sentence,
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.data).toEqual(lexicalDensityTestData.verboseDensityForOneSentence);
            })
            .end(done);
    });


    it('should not calculate lexical density because of wrong input  in verbose mode', (done) => {
        request(app)
            .post(`/complexity?mode=verbose`)
            .send({
                text: lexicalDensityTestData.integerText,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.stringError);
            })
            .end(done);
    });

    it('should not calculate lexical density because of much character  in verbose mode', (done) => {

        request(app)
            .post(`/complexity?mode=verbose`)
            .send({
                text: lexicalDensityTestData.muchCharacter,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.muchCharacterError);
            })
            .end(done);
    });

    it('should not calculate lexical density because of much word  in verbose mode', (done) => {

        request(app)
            .post(`/complexity?mode=verbose`)
            .send({
                text: lexicalDensityTestData.muchWord,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual(lexicalDensityTestData.muchWordError);
            })
            .end(done);
    });
});


describe('POST /nonlexical', () => {

    it('should add nonlexical word ', (done) => {

        request(app)
            .post(`/nonlexical`)
            .send({
                text: nonLexicalWordTestData.nonLexicalWord,
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.data.text).toEqual(nonLexicalWordTestData.nonLexicalWord);
            })
            .end(done);
    });

    it('should not add integer nonlexical word ', (done) => {

        request(app)
            .post(`/nonlexical`)
            .send({
                text: nonLexicalWordTestData.integerNonLexicalWord,
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.message).toEqual(nonLexicalWordTestData.nonLexicalWordIntegerError);
            })
            .end(done);
    });

    it('should not add duplicate nonlexical word ', (done) => {

        request(app)
            .post(`/nonlexical`)
            .send({
                text: nonLexicalWordTestData.nonLexicalDuplicateWord,
            })
            .expect(500)
            .expect((res) => {
                expect(res.body.data).not.toBe(null);
                expect(res.body.message).toContain(nonLexicalWordTestData.nonLexicalWordDuplicateError);
            })
            .end(done);
    });
})