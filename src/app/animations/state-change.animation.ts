import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';

export const sacleDivAnimation = trigger('scaleDiv', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.05)',
        })),
        // transition('small <=> large', animate('500ms ease-in', style({
        //   transform: 'translateY(40px)'
        // }))),
        transition('small <=> large', animate('500ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ])))
    ]);

export const taskStateAnimation = trigger('taskState', [
        state('inactive', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
        state('active',   style({opacity: 1, transform: 'translateX(0) scale(1)'})),
        state('void',   style({opacity: 0, display: 'none', transform: 'translateX(0) scale(1)'})),
        transition('* => void', [
            animate('1s ease-out', style({
                opacity: 0,
                transform: 'translateX(0) scale(0.1)'
            }))
        ])
    ]);
