/*

Homework: Arrays with nested documents

Suppose our movie details documents are structured so that rather than contain an awards field that looks like this:


    "awards" : {
        "wins" : 56,
        "nominations" : 86,
        "text" : "Won 2 Oscars. Another 56 wins and 86 nominations."
    }

they are structured with an awards field as follows:
    "awards" : {
        "oscars" : [
            {"award": "bestAnimatedFeature", "result": "won"},
            {"award": "bestMusic", "result": "won"},
            {"award": "bestPicture", "result": "nominated"},
            {"award": "bestSoundEditing", "result": "nominated"},
            {"award": "bestScreenplay", "result": "nominated"}
        ],
        "wins" : 56,
        "nominations" : 86,
        "text" : "Won 2 Oscars. Another 56 wins and 86 nominations."
    }
We often refer to the selection criteria passed as the first argument to find() as a "query document". What query document would we use in a find() command
to return all movies in the video.movieDetails collection that either won or were nominated for best picture? You may assume that an award will appear in the
"oscars" array only if the movie won or was nominated. Enter the query document in the box below. Please use double quotes around any keys in the query document.

HINT: For this question we are looking for the simplest query that will work. This problem has a very straightforward solution using something discussed in
the "Reading Documents" video.

*/

{"awards.oscars.award": "bestPicture"}