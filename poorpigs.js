let poorPigs = function(buckets, minutesToDie, minutesToTest) {
     let pigs = 0;
        while (Math.pow((minutesToTest / minutesToDie + 1), pigs) < buckets) {
            pigs += 1;
        }
        return pigs;
    }



/*
Success
Details 
Runtime: 76 ms, faster than 92.31% of JavaScript online submissions for Poor Pigs.
Memory Usage: 38.9 MB, less than 7.69% of JavaScript online submissions for Poor Pigs.
*/
