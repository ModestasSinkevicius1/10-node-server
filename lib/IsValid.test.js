import { IsValid } from "./IsValid.js";

describe('Error cases', () => {
    test('Empty username', () => {
        const [err, msg] = IsValid.username();
        expect(err).toBe(true);
        expect(msg).toBe('Invalid username');
    })

    test('Username as number', () => {
        const [err, msg] = IsValid.username(8);
        expect(err).toBe(true);
        expect(msg).toBe('Invalid username');
    })

    test('Username empty', () => {
        const [err, msg] = IsValid.username('');
        expect(err).toBe(true);
        expect(msg).toBe('Invalid username');
    })

    test('Username too short', () => {
        const [err, msg] = IsValid.username('A');
        expect(err).toBe(true);
        expect(msg).toBe('Invalid username');
    })

    test('Username too long', () => {
        const [err, msg] = IsValid.username('A' + 'b'.repeat(100));
        expect(err).toBe(true);
        expect(msg).toBe('Invalid username');
    })

    test('Correct username', () => {
        const [err, msg] = IsValid.username('Petras');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })
})