There is an API collection of Employees available @ the following endpoint (no trailing slash): https://statenweb.mockable.io/employees

The individual resources (employees) are available at the following endpoint scheme: http://statenweb.mockable.io/employee/{ID} where {ID} is the ID from the API collection endpoint, a single example is http://statenweb.mockable.io/employee/9912   (DO NOT INCLUDE A TRAILING SLASH that will return a 404)

The collection has limited data, just the ID, Name, and Department. The individual resource endpoints have more data, including their start date, a photo, and more information.

Your assignment is to use Create React App as a starting point and create a site that does the following:

    Includes the CSS from Bootstrap 5.X
    When a user first loads the site, they should see a loading notification and make an AJAX (using axios.get()) request to the API Collection. When you get the response back, hide the loading notification and output the listing of employees. Be creative :-).
    When a user clicks on an individual employee in the listing created in a previous state, the application should display loading notification, retrieve the employee data (using the resource endpoint scheme) and then replace the loading notification with a card containing the employee meta (start date, role, department, photo, name, etc.). See https://getbootstrap.com/docs/5.1/components/card/ as a starting point for what is meant mean by a `card.`

Important notes:

    If you are having issues getting the images to appear, please contact me, and do not let that hold you up.
    After the page loads the first time, there should be no subsequent page reloads; everything should happen with AJAX (using axios.get()) and JavaScript.
    Create React App will scaffold a git repository for you already with a .gitignore, you should connect that repository to a repository that you have created in Github. You should submit a link to that GitHub repository that contains the React application. You should NOT version node_modules/ and it should be a part of the .gitignore. It is part of the .gitignore that comes with create react app, so that should require no additional effort from you.
