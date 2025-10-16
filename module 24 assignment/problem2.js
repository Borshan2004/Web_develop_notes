function validEmail(email) {

    if (typeof email !== 'string') {
        return 'Invalid'
    }
    else if (email[0].includes('.') || email[0].includes('-') || email[0].includes('+') || email[0].includes('@')) {
        return false;
    }
    else if (!email.includes('.com')) {
        return false;
    }
    else if (email.includes(' ')) {
        return false;
    }
    else if (!email.includes('@')) {
        return false;
    }
    

    else {
        return true;
    }

}

const res = validEmail("programming-hero.com");
console.log(res);