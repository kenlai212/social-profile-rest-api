"use strict";

class UnauthorizedError extends Error{
    constructor(reason){
        super(reason);
        this.data = {reason}
    }
}

class BadRequestError extends Error{
    constructor(reason){
        super(reason);
        this.data = {reason}
    }
}

class ResourceNotFoundError extends Error{
    constructor(resource, query){
        super(`${resource} not found`);
        this.data = {resource, query};
    }
}

class InternalServerError extends Error{
    constructor(error, reason){
        super(reason);
        this.data = {stack: error, reason}
    }
}

class DBError extends Error{
    constructor(error){
        super("DB Error");
        this.data = {stack: error}
    }
}

module.exports = {
    ResourceNotFoundError,
    BadRequestError,
    InternalServerError,
    UnauthorizedError,
    DBError
}