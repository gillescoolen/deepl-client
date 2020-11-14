export interface UsageResponse {
    /**
     * Characters translated so far in the current billing period.
     * @type {number}
     */
    character_count: number;
    /**
     * Current maximum number of characters that can be translated per billing period.
     * @type {number}
     */
    character_limit: number;
}
