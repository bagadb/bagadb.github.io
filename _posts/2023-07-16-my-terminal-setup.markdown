---
layout: post
title:  "My Linux Terminal Setup! ( and how you can make your own )"
date:   2023-07-16 18:00:00 +0530
categories: Computers
---

![My Terminal Setup](/assets/my-terminal-setup-1.gif)
I have been theme-ing my terminals for some time now, and it is time that I share some of my experience and knowledge.

Here are my config files for reference:
[ GitHub Link ]( https://github.com/bagadb/my-dotfiles )

### Softwares:
These are my personal choice softwares, I will suggest alternatives below for ya'll.

- **Terminal Emulator:** [ Gnome Terminator ](https://gnome-terminator.org/)
- **Shell:** zsh
- **zsh Plugins Manager:** [ zplug ]( https://github.com/zplug/zplug )
- **Prompt:** [ Starship ]( https://starship.rs/ )
- Fonts:
:  \- Mononoki Nerd Font
:  \- ProggyClean Nerd Font
: [ Link to Nerd Fonts ]( https://www.nerdfonts.com/font-downloads )
- Additionally:
: \- Neofetch ;) 

---  

### End Product
The end product is a beautiful shell with a beautiful prompt with all the information and keyboard shortcuts and convenience you need and want. For now we will have:
- A Terminal Emulator with support for Tabs, Splitting and Keyboard Shortcuts 
- A Beautiful and informative prompt
- Everything uniformly themed
- Shell with tab completions, history suggestions, syntax highlighting

---

### Step 1: Choosing a Color Scheme
![Gogh Themes](/assets/my-terminal-setup-2.gif)

I have been theme-ing my terminals for some time now, and it is time that I share some of my experience.
This totally a personal choice and the freedom is unlimited. You will need a 16-Color theme, which you can apply to all the softwares we are going to use. Here are the most common terminal themes:
- Nord
- Catpuccin
- Tokyo Night
- Dracula

You can find the Hex Codes for the above themes and more common themes at [ Gogh Themes ]( https://gogh-co.github.io/Gogh/ )

I am currently using the Pixiefloss theme from the same site.

If you are a nit-picky person and you need just the right colors, do not hesitate to use [ Coolors ]( https://coolors.co/ ) to make it your own!

At times you might have to change up the colors a bit so that it works well with colorful programs like htop etc.

tl,dr:
: Pick a theme from [ Gogh Themes ]( https://gogh-co.github.io/Gogh/ ) and edit it if needed by using [ Coolors ]( https://coolors.co/ )

---

### Step 2: Font
![ My Prompt ](/assets/my-terminal-setup-3.png)

Picking a font and a color scheme is difficult, and you may have to keep coming back to this step and changing it back and forth. But the experience of having a perfect shell is totally worth it.

For fonts I recommend using [ Nerd Fonts ]( https://www.nerdfonts.com/font-downloads )

Nerd Fonts are high resolution and standardized fonts with a lot of glyphs and icons you can use inside of your terminal like distro logos, language logos, symbols etc. You can see the github branch symbol in my prompt which is from Nerd Fonts.

Please look into guides on how to install a nerd font for your specific distro.

---

### Step 3: Terminal Emulator
I currently use Terminator, which is a Gnome only solution. The Distro default terminal emulators are also good enough, but I don't think they support Screen splitting shortcuts and are not as customizable.  

In any case, you need to set up the 16-Color color scheme with the terminal emulator for a uniform theme.

Here are some hardcore customizable options:
- [ Alacritty ]( https://github.com/alacritty/alacritty )
- [ Kitty ]( https://sw.kovidgoyal.net/kitty/ )

Once you have chosen a color scheme, font and a terminal emulator, you need to set it up.

For terminator the easiest way is to change it, is via the config file.
{% highlight bash %}
vi ~/.config/terminator/config
{% endhighlight %}

Here, you can change the default profile directly and add the color scheme here instead of manually setting it up in the GUI.

Here's an example:

![ Color Scheme ](/assets/my-terminal-setup-4.png)

```
[profiles]
  [[default]]
    background_color = "#241F33"
    cursor_bg_color = "#D1CAE8"
    font = Mononoki Nerd Font Mono 13
    foreground_color = "#D1CAE8"
    palette = "#2f2942:#ff857f:#48b685:#e6c000:#ae81ff:#ef6155:#c2ffdf:#f8f8f2:#75507b:#f1568e:#5adba2:#d5a425:#c5a3ff:#ef6155:#c2ffff:#f8f8f0"
    use_system_font = False
    copy_on_selection = True
    title_transmit_fg_color = "#000000"
    title_transmit_bg_color = "#ae81ff"
    title_receive_fg_color = "#000000"
    title_receive_bg_color = "#48b685"
    title_inactive_bg_color = "#c5a3ff"
    title_use_system_font = False
    title_font = ProggyCleanSZ Nerd Font Mono Italic 12
```

---
### Step 4: Shell
Bash has very limited plugin and themeing support. Hence, we will be using zsh as our shell.
zsh is usually a package available through the package manager, install zsh as needed by your distro.

{% highlight bash %}
#Debian Based Distros
sudo apt install zsh

#Fedora Based Distros
sudo dnf install zsh

#Arch Based Distros
sudo pacman -S zsh

{% endhighlight %}

Just execute the shell and it will help you step by step to configure itself and set itself as the default shell for you.
 
{% highlight bash %}
zsh
{% endhighlight %}

After this  run the command compinstall and configure tab completion and how it works in a similar way.

{% highlight bash %}
compinstall
{% endhighlight %}

You will also need to setup binds if needed. Add the following to ~/.zshrc

{% highlight bash %}
#binds
bindkey -e                                        # emacs key bindings
bindkey ' ' magic-space                           # do history expansion on space
bindkey '^U' backward-kill-line                   # ctrl + U
bindkey '^[[3;5~' kill-word                       # ctrl + Supr
bindkey '^[[3~' delete-char                       # delete
bindkey '^[[1;5C' forward-word                    # ctrl + ->
bindkey '^[[1;5D' backward-word                   # ctrl + <-
bindkey '^[[5~' beginning-of-buffer-or-history    # page up
bindkey '^[[6~' end-of-buffer-or-history          # page down
bindkey '^[[H' beginning-of-line                  # home
bindkey '^[[F' end-of-line                        # end
bindkey '^[[Z' undo                               # shift + tab undo last action

bindkey "^[[1;3C" forward-word
bindkey "^[[1;3D" backward-word

{% endhighlight %}

I have also added a welcome command to my zshrc, which runs a mini neofetch everytime i open a new shell. You can add this to the zshrc for the same effect:

{% highlight bash %}
alias neofetch='neofetch --ascii_distro <your distro code>'
neofetch
{% endhighlight %}

Previously, I used to have fortune and cowsay, which used to print out quotes from movies I had added to the fortune database. You can get really creative here!

Again, my zshrc is available at this [ GitHub Link ]( https://github.com/bagadb/my-dotfiles )

---
### Step 5: Plugin Manager for zsh
A plugin manager for zsh will help you extend zsh without editing many configurations or doing manual steps. There are many plugin managers for zsh like
- Oh my zsh!
- Antigen
- zplug

The plugin manager of my choice is zplug. zplug is fast, easy and quick to setup. There's still a lot you can do with this and you can follow the readme at [ zplug Github ](https://github.com/zplug/zplug) for the details, but mine is a simple setup

== **Install zplug first by following the steps from  [ zplug Github ](https://github.com/zplug/zplug)** ==

Then just add the below config at the beginning of ~/.zshrc to get
: History Suggestions
: Syntax Highlighting
: Better Tab Complete
: Better History Search

{% highlight bash %}
source ~/.zplug/init.zsh
zplug "zsh-users/zsh-completions"
zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-syntax-highlighting", defer:2
zplug "zsh-users/zsh-history-substring-search", defer:3
zplug load
{% endhighlight %}

---

### Step 6: Prompt
![My Terminal Setup](/assets/my-terminal-setup-5.gif)

I have used [ Starship Prompt ]( https://starship.rs/ ) for my current setup. It's extremely customizable ( which means more work ) and fast!

Popular Alternatives Are:
- [ Powerlevel10k ]( https://github.com/romkatv/powerlevel10k )  ( easy )
- [ Spaceship Prompt ]( https://github.com/spaceship-prompt/spaceship-prompt )

Follow the steps on the website for easy install.

All the configuration for it is done using the file ~/.config/starship.toml

Use the configuration guide available at [ https://starship.rs/config ]( https://starship.rs/config )

Easy way to do it is to copy a preset from the [ available presets ]( https://starship.rs/presets/ ) or an existing config you find online and then change it to make it your own.

For my prompt i copied the [ Pastel Powerline Preset ]( https://starship.rs/presets/pastel-powerline.html ) and changed it to how I wanted it.

Again, my dotfiles are available at this [ GitHub Link ]( https://github.com/bagadb/my-dotfiles )

---

### Step 7: Final Steps

After going through all of the steps over a 100 times, changing everything back and forth and spending 9999 hours. You will finally have the perfect shell.

Again, please feel free to use my dotfiles at this [ GitHub Link ]( https://github.com/bagadb/my-dotfiles )

Now install neofetch, htop and show off your beautiful shell :)
![My Terminal Setup](/assets/my-terminal-setup-6.gif)

This guide is definitely just an intro to terminal "ricing". I have added links everywhere and to everything I can.

There's a lot more you can do and there is a lot more possible with the shell.

For inspiration ( and more beautiful terminals ) check out [ r/unixporn ]( https://www.reddit.com/r/unixporn/ ). Everyone puts out their dotfiles there as well, so you have endless inspiration and material to use :)

Enjoy!