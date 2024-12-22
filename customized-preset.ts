//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
});

export MyPreset;


import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './mypreset';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        })
    ]
};