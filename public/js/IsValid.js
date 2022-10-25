class IsValid {
    static username(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 30) {
            return [true, 'Not good'];
        }
        return [false, 'OK'];
    }

    static email(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 30) {
            return [true, 'Not good'];
        }
        return [false, 'OK'];
    }

    static password(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 30) {
            return [true, 'Not good'];
        }
        return [false, 'OK'];
    }
}

export { IsValid }