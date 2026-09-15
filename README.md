# fe-design-systems

Package design system based on AntDesign and built for React with Next.

# HOW TO USE:

# Add, Update, Delete the component and tokens design

You can add, update, or delete the component only on dir `package\*`

after the changes you have to build the package.

1.  React Package:
    If you only updated only the component inside React package, you can write and run the below command on your terminal.

    ```bash
    npm run build -w @fe-design-systems/react
    ```

2.  Tokens Package
    If you only updated the token colors inside Tokens package, you can write and run the below command on your terminal.

    ```bash
    npm run build -w @fe-design-systems/tokens
    ```

    after that you need to build the react package, using the command that have been stated from the first point.

# Run Storybook

To see what have been changed from react package, you can run this command in your terminal:

```bash
npm run storybook -w @fe-design-systems/storybook
```
