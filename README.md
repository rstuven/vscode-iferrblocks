# iferrblocks

Don't get me wrong: I do think that [Go's error handling is elegant](https://davidnix.io/post/error-handling-in-go/), but sometimes one just want to follow the happy path alone folding those pessimistic parts of the code, and then get back to fully see all that wonderful error handling. Or maybe not if you find it [cluttered and hard to read](https://www.reddit.com/r/golang/comments/6v07ij/copypasting_if_err_nil_return_err_everywhere/).

## Features

This extension finds all the `if err` blocks and either fold them or unfold them. The rest of the foldings keep untouched. That's it.

![Folding and unfolding of if err blocks](images/2017-09-09-17-10-33.gif)

## Release Notes

### 1.0.0

Initial release of iferrblocks.

**Enjoy!**