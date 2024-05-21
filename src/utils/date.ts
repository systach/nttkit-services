type FDate<
    Month extends number,
    Day extends number,
    Year extends number
> = `${Month}/${Day}/${Year}`;
type Meridiem = ['am', 'pm'][number];
type FTime<
    Hour extends number,
    Minute extends number,
    AMPM extends Meridiem
> = `${Hour}:${Minute} ${AMPM}`;

export function convertDate<
    M extends number,
    D extends number,
    Y extends number
>(_mmddyyyy: FDate<M, D, Y>) {
    return [0, 0, 0];
}

export function convertTime<
    H extends number,
    M extends number,
    AMPM extends Meridiem
>(_hhmmAMorPM: FTime<H, M, AMPM>) {
    return [0, 0, 'am'];
}

