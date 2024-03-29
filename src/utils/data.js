export const EXAMPLES = [
    {
        title: "Example 1",
        examples: [
            {
                example: 
                `
                kriya maxNum|i, j| => {
                    yadi (i > j) {
                        prakashan i + ' is greater than ' + j;
                    } anyatha {
                        prakashan j + ' is greater than ' + i;
                    };
                };
                
                maxNum|1, 8|;
                `
            }
        ]
    },
    {
        title: "Example 2",
        examples: [
            {
                example: 
                `
                @text = 'h';
                @i = 0;
                yavat (i < 5) {
                    text = text + 'i';
                    i = i + 1;
                    prakashan text;
                };
                `
            }
        ]
    },
    {
        title: "Example 3",
        examples: [
            {
                example: 
                `
                @text = 'h'; -> declare variables using @ <-
                @number = 18;
                @float = 1.5;
                prakashan 'this is text > ' + text;
                prakashan 'this is number > ' + number;
                prakashan 'this is float > ' + float;
                `
            }
        ]
    },
    {
        title: "Example 4",
        examples: [
            {
                example: 
                `
                kriya maxNum|i, j| => {
                    yadi (i > j) {
                        prakashan i + ' is greater than ' + j;
                    } anyatha {
                        prakashan j + ' is greater than ' + i;
                    };
                };
                
                maxNum|1, 8|;
                `
            }
        ]
    }
]