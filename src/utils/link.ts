type PathQuery<Query extends object> = Query extends null
    ? string
    : {
          pathname?: string;
          query?: object;
          as?: string;
      };

export function getLinkWithQuery<
    P extends string,
    Q extends object,
    D extends string
>(pathname: P, query: Q, display: D) {
    const validParameters = [
        pathname && typeof pathname == 'string',
        query && typeof query == 'object',
        display && typeof display == 'string',
    ].every(Boolean);

    if (!validParameters)
        throw new Error(
            '<getLinkWithQuery> Sufficient parameters are not provided.'
        );

    const pq: PathQuery<{}> = {
        pathname,
        query,
        as: display,
    };

    return pq;
}

export function getLink(pathname: string) {
    const validParameter = pathname && typeof pathname == 'string';

    if (!validParameter)
        throw new Error('<getLink> Sufficient parameter is not provided.');

    return pathname;
}
