This is a shared repository used as a submodule here. 

link: https://github.com/Energia-Pharma-Services/shared-dtos.git

command to add this as a submodule in any other project:
'git submodule add https://github.com/Energia-Pharma-Services/shared-dtos.git path/to/destination/folder

<!-- To pull all the code of the submodule once cloned -->
- 'git submodule init' 


<!-- Make changes inside a submodule -->
- cd inside the submodule directory.
- Make the desired changes.
- git commit the new changes.
- git push the new commit.
- cd back to the main repository.
- In git status you'll see that the submodule directory is modified.
- In git diff you'll see the old and new commit pointers.
- When you git commit in the main repository, it will update the pointer.

<!-- More Info -->
- https://gist.github.com/gitaarik/8735255