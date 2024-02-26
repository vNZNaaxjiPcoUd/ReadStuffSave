# Visual Studio Code for Java: The Ultimate Guide 2019

[Visual Studio Code has come a long way to become the preferred text editor of polyglot developers. Javascript, TypeScript, Go, Python, and other languages have a massive amount of developers coding through VS Code, in part thanks to the huge ecosystem of extensions that enhance and enrich the experience in VS Code, turning it into a super smart text editor with IDE-ish capabilities while remaining ludicrously fast and lightweight.](https://medium.com/@brunoborges/visual-studio-code-for-java-the-ultimate-guide-2019-8de7d2b59902)

Unsurprisingly, VS Code can do Java as well, and many Java champions and speakers have chosen it for their on-stage appearances and live demos.

Here's the ultimate guide of 2019 for Java developers to use Visual Studio Code to develop, run, debug, and deploy their applications.

If you haven't already downloaded Visual Studio Code, **[install now](https://code.visualstudio.com/?WT.mc_id=medium-blog-brborges).** The rest of this guide will assume you have at least Java 8 installed, though it works with Java 11 too. You can also skip this guide completely, and simply go to the documentation page for [Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java?WT.mc_id=medium-blog-brborges). But check this guide below for a laser-focused walkthrough in getting the most out of VS Code for Java development.

# Initial Setup

There is a set of extensions that are the minimum requirement to get core Java support in VS Code. Let's dig into each of them.

## Java Extension Pack, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack&WT.mc_id=medium-blog-brborges) - install)

This extension pack bundles the 5 extensions below explained in detail, and it will help you get started without digging too much.

## Language Support for Java, by Red Hat ([overview](https://marketplace.visualstudio.com/items?itemName=redhat.java&WT.mc_id=medium-blog-brborges) - install)

This is the one and only extension you are required to install to have Java support. All other extensions are complementary, but do consider them based on the types of projects you'll be working on.

Once you install language support, you can read and edit Java source code. Start by creating a HelloWorld.java file and open on VS Code (or create the file within and then save in some folder).

![https://miro.medium.com/max/2160/1*tC_toYDs5ZF9CJaM5cFSwA.png](https://miro.medium.com/max/2160/1*tC_toYDs5ZF9CJaM5cFSwA.png)

![https://miro.medium.com/max/2280/1*K0ySHYu9axnMRy9ZuAXNBg.png](https://miro.medium.com/max/2280/1*K0ySHYu9axnMRy9ZuAXNBg.png)

![https://miro.medium.com/max/2372/1*4xue8jvdpTyePmGUaacxIQ.png](https://miro.medium.com/max/2372/1*4xue8jvdpTyePmGUaacxIQ.png)

Java code snippet templates: ***class**,* ***main**,* ***sysout***

> Want to read this story later? Save it in Journal.
> 

![https://miro.medium.com/max/1400/1*5h3Fv82Gsilyhh2URcIVZA.png](https://miro.medium.com/max/1400/1*5h3Fv82Gsilyhh2URcIVZA.png)

Complete Hello World program in Java

Once done, you can open the terminal — on Mac OS, type ⌘+\`— and then type`javac HelloWorld.java` to compile the file.

![https://miro.medium.com/max/1400/1*lCR6WP_Q16L-rWV5cYjDNA.png](https://miro.medium.com/max/1400/1*lCR6WP_Q16L-rWV5cYjDNA.png)

Embedded terminal on VS Code

This will generate a HelloWorld.class file. Run it with `java HelloWorld`.

The Language Support for Java extension brings Java support through the use of the Eclipse Language Server Protocol. [Learn more about Eclipse LSP](https://www.eclipse.org/community/eclipse_newsletter/2017/may/article4.php).

## Other Features

This extension adds many other capabilities that will help you navigate, write, refactor, and read Java source code quickly enough that you may as well ditch an IDE in favor of a lightweight text editor.

![https://miro.medium.com/max/1400/1*WYb9HbWIceqE7mNtOS7hCQ.png](https://miro.medium.com/max/1400/1*WYb9HbWIceqE7mNtOS7hCQ.png)

Breadcrumbs navigation (top) — Outline view (bottom left)

Check the [overview page](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) for a complete list of its features and refactoring shortcuts.

## Debugger for Java, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug&WT.mc_id=medium-blog-brborges) - install)

Once you get the basics of writing and reading Java code on Visual Studio Code, the next step is for sure running and debugging. This extensions provides exactly that. It will use the default JAVA\_HOME on your computer, but this can be customized of course.

![https://miro.medium.com/max/1400/1*siluxvWzATjM-AOGK-Xqhw.png](https://miro.medium.com/max/1400/1*siluxvWzATjM-AOGK-Xqhw.png)

Run | Debug Java applications

It has all the capabilities of a normal Java IDE debugging feature, and it allows greater customization and control over how things are executed and how the debugger is connected to the JVM. Works with remote JVMs as well.

Once this extension is installed, you will notice two hyperlinks above the `main` method, like in the picture above. You can click **Run**, and the code will be compiled and executed. You can also set a breakpoint and hit **Debug**.

![https://miro.medium.com/max/1400/1*eqAnMQy86iUQJevwnF696Q.png](https://miro.medium.com/max/1400/1*eqAnMQy86iUQJevwnF696Q.png)

For **Remote Debugging**, you will need to add a new configuration. Go to the Debug view (Shift+⌘+D on Mac) and hit the gear ⚙ config️ button. This will open the `launch.json` file. Click on **Add configuration** blue button you see on the screen. That should open a pop-up menu like the one below.

Now you can customize a launch that can plug to a remote JVM. Just provide all the details like hostname and port number.

As any debugging IDE, you can scope variables, stack trace, and even make changes to variables content during execution time.

![https://miro.medium.com/max/1400/1*8vmQbW_-LuoHAPS_n3yIKQ.png](https://miro.medium.com/max/1400/1*8vmQbW_-LuoHAPS_n3yIKQ.png)

Changing Java variables during debug on VS Code

And that completes the basic setup of Visual Studio Code for reading, writing, running and debugging Java.

# Intermediary Setup

Once you get used to the basics of Java coding, you will soon need to work with libraries, dependencies, classpath and so on. The best way to improve Java support on Visual Studio Code is by adding these three extensions:

1. [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency&WT.mc_id=medium-blog-brborges)
2. [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven&WT.mc_id=medium-blog-brborges)

Let's take a look at each of them.

## Java Dependency Viewer, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency&WT.mc_id=medium-blog-brborges) - install)

This extension will give you two core capabilities. The main one is the concept of a "Project", that you can use to manually add libraries (JARs) to it. The second one is that it allows you to visualize the classpath your project is currently set for, even if it is a Maven project (see Maven for Java extension next).

Open the command pallet (Shift+⌘+P) and type *create java*:

![https://miro.medium.com/max/1400/1*z0wx7qnmCm0w3_0tHctOfQ.png](https://miro.medium.com/max/1400/1*z0wx7qnmCm0w3_0tHctOfQ.png)

Create a Java Project

This will ask you for a location where the project will be created. A project consists of a folder with the same name of the project name (it will be the next question from the command pallet once you select a location, for example, *myworkspace*).

Once the project is created, VS Code will open this new folder on a new window.

![https://miro.medium.com/max/1400/1*6IOjXLoQi6Z0fgfY81U3Tw.png](https://miro.medium.com/max/1400/1*6IOjXLoQi6Z0fgfY81U3Tw.png)

New Java Project

As you can see, the project has a basic structure with bin and src folders. Inside src, you will find a basic Java class to get started. If you are an experienced Java developer, you will quickly figure out that this extension utilizes the Eclipse project format, simply because it works well with the Eclipse Language Server Protocol and the other extensions.

## **Adding Libraries and JARs**

You can add libraries by editing the .classpath file with custom entries of JARs that may be placed anywhere, for example a lib folder. The extensions will automatically load those libraries in the classpath and you should be able to run your code.

![https://miro.medium.com/max/1400/1*0vPFyk1W61i1Ef7qZmEbQQ.png](https://miro.medium.com/max/1400/1*0vPFyk1W61i1Ef7qZmEbQQ.png)

Editing .classpath to add extra libraries.

## Maven for Java, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven&WT.mc_id=medium-blog-brborges) - install)

Maven is the most widely used project build and dependency management tool in the Java ecosystem. So, this extension finally gets you to a point where you can work on pretty much any Java project, of any kind, through Visual Studio Code.

You will be able to generate and bootstrap Maven projects through Maven archetypes (skeletons), and then manage dependencies and trigger Maven goals, and edit the `pom.xml` file with some smart code completion.

![https://miro.medium.com/max/1400/1*qlI7IsuGCCnam-1HvUsIaQ.png](https://miro.medium.com/max/1400/1*qlI7IsuGCCnam-1HvUsIaQ.png)

Maven commands

Let's take a look:

- Open the command pallet again, and type *Maven*.
- Select *Generate from Maven Archetype.*
- Select *maven-archetype-quickstart*.

The extension will ask for a destination folder, where the project folder will be generated. It will bring you to the terminal where you will have to input parameters to the Maven command-line, but don't worry as it will be guided.

Once the project is created, right from the terminal, call `code <folder name>`.

![https://miro.medium.com/max/1400/1*Sp3F4LHOLqU3f5fclR-Zjw.png](https://miro.medium.com/max/1400/1*Sp3F4LHOLqU3f5fclR-Zjw.png)

Open the newly created folder on VS Code

Alright, you should have your Maven project now opened on VS Code. The very basic thing you can do is Run your code. You have two choices here:

1. Run with the `Run` hyperlink inside the App class next to the `main` method, as we learned earlier.
2. Use Maven, of course.

If you use the Debugger for Java extension (*Run | Debug*) triggers, the extension will use the classpath generated by Maven, to ensure all dependencies are properly added to the classpath.

To run with Maven though, you can either use the Terminal as usual, or open the Command Pallet and type *Maven Execute Commands*.

![https://miro.medium.com/max/1400/1*q6oQo3wEzFqWodand0V90w.png](https://miro.medium.com/max/1400/1*q6oQo3wEzFqWodand0V90w.png)

Command Pallet showing Maven actions

It will ask you to select a project. Since you have only one, hit Enter on it. Next what you will see is a list of all the default core Maven goals. Hit `package` to generate the JAR file.

![https://miro.medium.com/max/1400/1*1I52tTxYkm_Q68v5g0U1CA.png](https://miro.medium.com/max/1400/1*1I52tTxYkm_Q68v5g0U1CA.png)

If you want to run custom goals, such as those inherited from Maven plugins, you can use the Maven view:

![https://miro.medium.com/max/1400/1*52wRN4Gki9GKj17XTBXWxQ.png](https://miro.medium.com/max/1400/1*52wRN4Gki9GKj17XTBXWxQ.png)

Execute goals from Maven plugins

Once you edit your `pom.xml` file to add dependencies, VS Code will automatically reload the classpath and you should be able to import classes and packages from your new dependencies. Clean and smooth.

## Java Test Runner, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test&WT.mc_id=medium-blog-brborges) - install)

Final step is to enhance how you run, debug, and visualize the results of your unit tests. This extension adds hyperlinks to unit tests (supports JUnit and TestNG) that can be executed individually, and you can see reports right away inside Visual Studio Code, like in the example below.

![https://miro.medium.com/max/1400/1*eq4taUBVgb9sVi4BI06hBg.png](https://miro.medium.com/max/1400/1*eq4taUBVgb9sVi4BI06hBg.png)

Running unit tests in VS Code

This extension will also enable the Test Explorer view, so you can focus on the unit tests of your code, and write software in a more TDD style.

![https://miro.medium.com/max/1400/1*Zt3BrRvTMsmH15T7PIo2VQ.png](https://miro.medium.com/max/1400/1*Zt3BrRvTMsmH15T7PIo2VQ.png)

Text Explorer

This extension currently works only with Maven projects, so make sure you have the Maven for Java extension installed as well.

# Advanced Setup

If you are now feeling comfortable with using VS Code for Java, it's time to ramp up your usage. Below is a list of some extensions that will enhance your experience on your day-to-day job.

This is just a hint on which extensions to add next, and not a de facto list, but can get you far ahead.

## GitLens ([overview](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - install)

![https://miro.medium.com/max/1400/1*cRYSYH0MewggVXtmmj_4fg.png](https://miro.medium.com/max/1400/1*cRYSYH0MewggVXtmmj_4fg.png)

Hopefully you are using Git already, whether through GitHub or any other service or environment. This extension will give you insights on authorship right into the source code, such as 'who added this method and when'.

This is how a Java class will look like once you have GitLens installed. Observe the lines that do not have numbers. Those are notes on commit history. You can also simply hover the mouse on a specific line and it will show when that was added, by whom, and on which commit hash.

## REST Client ([overview](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - install)

If you are a developer building REST APIs, this is a must-have extension on your Visual Studio Code environment. With it, you will be able to edit .http files that contain HTTP calls. The editor will provide quick code snippets and templates, and it gives you magic hyperlinks within that once clicked, it triggers the HTTP call and opens the result right next to it. Here's a quick look.

![https://miro.medium.com/max/1400/1*Nsl7NFn1PPAcbJa4TApBhw.gif](https://miro.medium.com/max/1400/1*Nsl7NFn1PPAcbJa4TApBhw.gif)

REST Client

## IntelliCode, by Microsoft ([overview](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - install)

A nice extra extension to enhance is enabling IntelliSense for your Java code. This extension uses machine learning based on open source projects hosted on GitHub to figure out what are the most commonly used methods and calls based on your existing code to give you better autocomplete recommendation.

![https://miro.medium.com/max/1400/1*pBxyI7XDKI3MkkB6zXVY_Q.gif](https://miro.medium.com/max/1400/1*pBxyI7XDKI3MkkB6zXVY_Q.gif)

IntelliSense for Java

This is it! You now have a Visual Studio Code setup that is complete enough to any sort of real-world Java development.

Let me know if you have further questions or ideas for a future post on VS Code for Java.

Comment down below or hit me on Twitter: [@brunoborges](https://twitter.com/brunoborges).