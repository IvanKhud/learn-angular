import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

export class ConfigOptionsService {

    constructor(private user: User) {}

    getUserData() {
        return this.user;
    }

    setUserData(data: User) {
        this.user = data;
    }
}
