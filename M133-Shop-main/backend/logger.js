'use strict'

import * as Colors from 'https://deno.land/std@0.120.0/fmt/colors.ts'

export class Logger {

    infoBanner = Colors.green("[INFO]")
    errorBanner = Colors.red("[ERROR]")


    constructor() { }

    info(message) {
        console.info(this.infoBanner + " - " + message);
    }
    error(message) {
        console.info(this.errorBanner + " - " + message);
    }
}