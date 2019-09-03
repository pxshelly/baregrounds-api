# baregrounds #
   > _"Make this a world we can walk on barefoot again."_

### Description ###
More often than not, there are numerous disposal bins at hand and consumers are perplexed as to which bin to throw their waste. Combine the amount of bins available, lack of knowledge of what each bin is supposed to contain, and the swiftness that the one would like to get rid of the trash in their hands; by the time people usually reach the end of this process, they give up and dump their waste in the landfill bin. This application combats this problem by allowing an individual to easily input an item to see which disposal bin their waste belongs to.


### API Usage ###
`GET /recyclables/:searchTerm`

Inputs: 
- `searchTerm`: [string] item name to be searched in bareground database

Outputs:
- [array] array containing an object where each object returns the bin in which the search term belongs

```javascript
[
    {
        "bin": "recycle"
    }
]
```

> Note: Currently, only exact match is supported. Fuzzy search is in progress.


`POST /recommendations/:itemName/:bin`  
 - In progress
