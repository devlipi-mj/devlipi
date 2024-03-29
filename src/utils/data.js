export const EXAMPLES = [
    {
        title: "Print",
        examples: [
            {
                example: 
                `
                prakashan 'this is DevLipi';
                `
            }
        ]
    },
    {
        title: "Variables",
        examples: [
            {
                example: 
                `
                -> you can declare variables using @ <-
                @text = 'h'; 
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
        title: "Loops",
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
        title: "Functions",
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