/*
-------------------------------FOR BITBUCKET-----------------------------------------
-> How to use these?
    ->  Just create a new bookmark with the snippets below. Like just copy them and
        thats it!
-> Did I lie to you in the above question?
    ->  Yes I did, you have to change the url as per your repository/account. So just
        get you WORKSPACE and REPOSITORY names and replace them.
        We could have added a prompt for that, but that defeats the whole point of 
        what we are doing.
-> Something is wrong here?
    ->  Please report it in the issues, there is always the possibility in url scheme 
        changes that bitbucket uses.
-> You have some different amazing bookmarklet?
    ->  That's awesome, you can always create pull requests and then we can merge them so
        that others can also enjoy your piece of productivity!          
*/



// Go to commit
javascript:(
    function(){
        let commitId=prompt('Enter commit id : ');
        window.location=`https://bitbucket.org/WORKSPACE/REPOSITORY/commits/${commitId}`;
    }
)();

//Create PR 
javascript:(
    function(){
        let source=prompt("Enter source branch : ");
        let dest=prompt("Enter destination branch : ");
        window.location=`https://bitbucket.org/WORKSPACE/REPOSITORY/pull-requests/new?source=${source}&dest=${dest}`;
    }
)();
