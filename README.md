# rn-assignment5-11117313

##Homepage
The Homepage component of this React Native application is designed for easy navigation and quick access to various functionalities. It comprises several elements, each contributing to a seamless user experience:

Profile Section: Displays a welcome message along with the user's profile picture (Image component) and name (Text component).

Search Box: A rounded box containing a search icon

Card Information: Showcases a card image, providing a visual representation of the user's card details (View and Image components).

Transaction Overview: Lists recent transactions using the FlatList component, which is populated with Transaction components. Each transaction displays an icon, title, section, and amount.

Quick Actions: Four rounded boxes provide shortcuts for common actions like sending money, receiving money, taking a loan, and topping up (View and Image components for each action).

Footer Navigation: A footer with navigational buttons allows users to switch between different app sections such as Home, My Cards, Statistics, and Settings (TouchableOpacity, Image, and Text components).

The overall design is enhanced with ScrollView to ensure smooth scrolling through the content, and StyleSheet is used for consistent styling across components. The use of the useNavigation hook from @react-navigation/native facilitates navigation between different screens in the app.

##Settings
The Settings component of this React Native application is designed to provide users with various options to customize their app experience and manage their account. It includes several key elements and uses a theme context to support both light and dark modes:

Theme Integration: Utilizes the useTheme hook to toggle between light and dark themes. The current theme is applied to the background and text colors throughout the component.

Header: Displays a title "Settings" centered at the top of the screen using the Text component.

Settings Options: Contains a list of settings options, each presented as a card. The options include:

Language
My Profile
Contact Us
Change Password
Privacy Policy
Theme toggle (with a Switch component to switch between light and dark themes)
Footer Navigation: A footer with navigational buttons allows users to switch between different app sections such as Home, My Cards, Statistics, and Settings (TouchableOpacity, Image, and Text components).

Styling: Uses StyleSheet to define styles for various components, ensuring a consistent and visually appealing design across the app.

The overall design ensures easy access to important settings and seamless navigation, enhancing the user experience.
![IMG_7380](https://github.com/calebtetteh2000/rn-assignment5-11117313/assets/150846386/44fdf1f0-9c36-432b-a62d-d8aa76d0ba7a)
![IMG_7379](https://github.com/calebtetteh2000/rn-assignment5-11117313/assets/150846386/5c73b60c-ed46-4e3f-ba30-dd5c42e5ad6e)
![IMG_7377](https://github.com/calebtetteh2000/rn-assignment5-11117313/assets/150846386/bbb797b3-915c-4873-925e-a72457ae1541)
![IMG_7376](https://github.com/calebtetteh2000/rn-assignment5-11117313/assets/150846386/a87febdf-80b1-4df5-b9ef-68669348cd6b)
