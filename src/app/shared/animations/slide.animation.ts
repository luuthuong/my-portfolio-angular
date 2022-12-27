import { animate, group, query, style, transition, trigger } from "@angular/animations";

const top = [
    query(
        ':enter, :leave',
        style({
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0
        }),
        { optional: true }
    ),
    group([
        query(':enter',
            [
                style({ top: '-100%' }),
                animate('0.7s cubic-bezier(0.23, 1, 0.320, 1)',
                    style({ top: 0 }))],
            {
                optional: true,
            }),
        query(':leave', [style({ top: 0 }), animate('0.7s cubic-bezier(0.23, 1, 0.320, 1)', style({ top: '100%' }))], {
            optional: true,
        }),
    ])
];

const bottom = [
    query(':enter, :leave', style({
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
    }), { optional: true }),
    group([
        query(':enter', [style({ top: '100%' }), animate('0.7s cubic-bezier(0.23, 1, 0.320, 1)', style({ top: 0 }))], {
            optional: true,
        }),
        query(':leave', [style({ top: 0 }), animate('0.7s cubic-bezier(0.23, 1, 0.320, 1)', style({ top: '-100%' }))], {
            optional: true,
        }),
    ]),
];

export const SlideAnimation = [
    trigger('animateSlide', [
        transition(':increment', top),
        transition(':decrement', bottom),
    ])
]