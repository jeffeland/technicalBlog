There are many reasons to develop differently something that already exists in many forms.  
My main reasons are : 
* existing forms are too complex,  
* and they are missing features at the same time.  
  
### Simplicity
This blogger do not require to deploy a server.  
The logic is implemented client-side using [AngularJS]().  
The hosting is managed by GitHub and its [pages]().  
  
The blog posts use a simple and standard form for content and formatting : [Markdown]().  
The rendering is also done client-side using the Javascript library, [marked]().  
As this blogger is intended to be used for technical blog posts, it can display formatted code using the library [highlightJS]().  
 
The look and feel is managed by the [bootstrap]() [Journal]() stylesheet.  
  
To get maximum performance and minimum duplication, this blogger gets all its resources from Content Delivery Networks(CDN).  
  
That leads this blogger (in its initial version at least) to be made of less than two hundred dedicated lines of code.  
  
  
### Features
This blogger is dedicated to technical(software) blog posts.  
It uses the same tools for edition and publication as the ones you use for coding.  
Pushing a new blog post corresponds to pushing a new markdown file and updates on a JSON file to the gh-pages branch of your GitHub repository.  
  
You gain all the features from GitHub in term of versioning, collaboration and auditing.  
  
### How to use it?
1- ```git clone ... ```  
2- Configure the data directory. The files are self-descriptive.  
3- ```git origin ...```  
4- ```git push```  
4- Browsing to ....  
  
You are done and you can start to create new blog posts.  
