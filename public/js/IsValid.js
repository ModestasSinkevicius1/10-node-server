class IsValid {
    static username(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 30) {
            return [true, 'Username either too short or too long'];
        }
        if(str !== str.trim()){
            return [true, 'Username should not have outside whitespaces'];
        }
        return [false, 'OK'];
    }

    static email(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 100) {
            return [true, 'Email too short or too long'];
        }
        if(str !== str.trim()){
            return [true, 'Email should not have outside whitespaces'];
        }
        return [false, 'OK'];
    }

    static password(str) {
        if(typeof str !== 'string' || str.length < 2 || str.length > 50) {
            return [true, 'Password too short or too long'];
        }
        return [false, 'OK'];
    }
}

export { IsValid }