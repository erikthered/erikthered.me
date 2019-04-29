---
title: "Outfitting a developer in 2019"
date: "2019-04-29"
---

At this point in my career I've changed jobs enough times that I'm starting to see certain patterns emerge. One of less good ones is how hardware (and sometimes software) is chosen for developers with little to no input from the devs themselves. Everybody works a little bit differently so it makes sense to provide some level of choice in what tools we use to do our work each day.

Although things are certainly better than they were years ago, when you'd get the same anemic Windows laptop as your non-engineering co-workers, we've still got plenty of room to improve. My last few employers have been content to toss me a decently configured MacBook Pro and call it a day. While MacOS is certainly a nice operating system, my personal preference is Linux for software development. Obviously, OS choice is highly subjective and comes down to what you're comfortable with.

Fortunately, where we're at now all three major OSes (Windows, MacOS, Linux) are perfectly serviceable for doing general development. Obviously, if you're working with a specialized stack or target you may have additional constraints to be considered. That said, give your devs as much choice as possible.

## Core workstation

Most workplaces now opt for a laptop by default, which makes sense as the portability gives you a lot more flexibility. If you need raw power a desktop is always going to be king, but laptops are more than capable for a large percentage of devs. So for the purpose of this article, let's only consider laptops.

Here's the minimum spec I'd recommend:
- Multicore, modern x86 processor: Intel i5/i7 or Ryzen 5/7
- 16GB+ RAM (8 just isn't enough with things like Docker in the mix)
- 512B+ SSD

These specs should cover you for most general development workloads, I would hope if you're in a more specialized environment you've already got equipment to match.

A word on laptop screens: 1080P is probably the most common resolution and a solid choice. A few laptops offer 1440P or 4K, but these aren't all they're cracked up to be: you'll need to adjust scaling to compensate for the small physical screen size and driving higher resolutions comes at the cost of battery life. Steer clear of 1366x768 screens though, there's no reason these should ever be chosen.

### Ultrabooks

These are more portable (thinner and lighter) than "standard" laptops, which is achieved by soldering/glueing components. As a result you lose the ability to upgrade or service most components. Heat management can be an issue for some models. These typically max out at 16GB of RAM. 13"-14" screens are typical for this form factor. Prices range from $1000 up to $2500, with configurations fitting the above recommendations around $1600 - $2000.

### Traditional Laptops

These are heavier and larger than Ultrabooks, but are better at managing heat and usually allow for some upgrades down the road. Average screen size is a bit bigger around 14"-15" and RAM capacity tops out at 32GB. The price range is pretty wide on these, with some configurations even exceeding $3000. A reasonable configuration still hovers around $1600 - $1800.

## Peripherals

### Monitors

The bottom line here is to supply ample screen real estate, the exact configuration is more personal preference than anything. For a minimum I'd recommend a pair of 1080P screens around 24" or a single 1440P screen at 27-32". If you want 4K I'd only recommend 32" and above, due to pixel density. In general, opt for an IPS panel as this technology has better color accuracy and viewing angles. You're only looking at $300-$400 for the minimum recommendation here.

### USB-C Hub/Dock

As USB-C is starting to replace all other connectors on laptops, it's important to have enough ports to connect all of your peripherals. There are a lot of options in the space and compatibility becomes complicated once you've got video in the mix as well. I would recommend selecting a hub/dock that has Thunderbolt 3 support, as this is typically how video signals are carried. If you're using a laptop that charges via USB-C, some docks are able to provide power. Your best bet may be to check for the specific support for your laptop.

### Extra charger

Chargers aren't that expensive and it's extremely convenient to have two. One can be kept in your bag when you're on the go and the other can be left hooked up to your permanent workstation. In the case you're using a dock that provides power, you won't need two.

### Headset or Headphones with integrated microphone

Most laptops have a webcam built in which works fine, but the integrated microphone and speakers can be less than ideal. My recommendation would be to set a budget and let people choose what they want. There are several different kinds of headphones/headsets, so it's a very subjective choice. I know plenty of people who love in-ear headphones but I've not found a pair that stays comfortable after about an hour of use.

### External keyboard and mouse

It's good to have these if you use a laptop stand or dock. These items are also going to heavily depend on personal preference. Unless you're really averse to cables, I tend to prefer wired keyboards and mice to eliminate another potential point of trouble. Annoyingly, USB3 has a [known interference issue](https://www.intel.com/content/www/us/en/io/universal-serial-bus/usb3-frequency-interference-paper.html) with 2.4GHz wireless devices.


## Sample Setups

In case you think this is a sales pitch, I want to assure you it's not. None of the links below are affiliate links and I have no relationship with either Dell or Lenovo. It just happens that these two companies make machines that tend to support both Linux and Windows well, while being accepted in larger enterprises. There's certainly other manufacturers out there that make great machines, so don't immediately rule them out just because I didn't include them here.

### Ultrabooks

#### Dell Option:

Dell is awesome, as they have several _Developer Edition_ laptops that can be purchased with Ubuntu pre-installed (such as the one linked). Obviously Windows is still available if you prefer that environment.

- [Dell XPS 13 9380 - Developer Edition](https://www.dell.com/en-us/work/shop/dell-laptops-and-notebooks/xps-13-developer-edition/spd/xps-13-9380-laptop/cax13w10p1c603subuntu) - $1,659.99
  - Intel Core i7-8565U
  - 16GB LPDDR3 2133MHz RAM (Upgrade)
  - 512GB M.2 PCIe NVMe Solid State Drive (Upgrade)
  - 13.3" FHD (1920x1080) Non-Touch InfinityEdge Display
  - Intel UHD Graphics 620
- [Dell UltraSharp 27 Monitor: U2719D 1440P](https://www.dell.com/en-us/work/shop/dell-ultrasharp-27-monitor-u2719d/apd/210-arcv/monitors-monitor-accessories) - $379.99
- [Dell Business Dock - WD15](https://www.dell.com/en-us/work/shop/dell-business-dock-wd15-with-130w-adapter-with-dib-mdp-to-dp-cable-27ft-08m/apd/452-bddv/pc-accessories?ref=p13n_snp_results_mv&c=us&cs=04&l=en&s=bsd) - $182.99

Estimated Total: $2,322.97 (before tax)

#### Lenovo Option:

While there isn't any option to have Linux pre-installed on Lenovo laptops, there are a good number of models which are [Ubuntu certified](https://certification.ubuntu.com/certification/make/Lenovo/?query=&category=Laptop&release=&level=Any).

- [ThinkPad X1 Carbon 6th Gen](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/ThinkPad-X1-Carbon-6th-Gen/p/20KH002KUS) $1883.27
  - Intel Core i7-8650U
  - 16 GB RAM
  - 512 GB SSD PCIe
  - 14.0" WQHD (2560 x 1440) IPS Display
  - Intel® UHD Graphics 620
- [ThinkVision P27h-10 27 inch Wide QHD IPS Type-C Monitor](https://www.lenovo.com/us/en/accessories-and-monitors/monitors/professional/P27h-10A16270QP127inch-Monitor-HDMI/p/61AFGAR1US) - $268.99
- [ThinkPad Thunderbolt Dock](https://www.lenovo.com/us/en/accessories-and-monitors/docking/universal-cable-docks-thunderbolt/Thunderbolt-Dock-US/p/40AC0135US) - $244.99

Estimated Total: $2,397.25 (before tax)

### Traditional Laptops

#### Dell Option:

Similar to the XPS 13 above, this model allows you to have Ubuntu pre-installed.

- [Dell Precision 5530](https://www.dell.com/en-us/work/shop/workstations-isv-certified-dell/precision-5530/spd/precision-15-5530-laptop/xctop5530hwus3) - $2,191.74
  - Intel Core i7-8850H (6 cores)
  - 16 GB DDR4-2666 RAM
  - 512GB M.2 NVMe PCIe Class 40 SSD
  - 15.6" UltraSharp FHD Display, 1920x1080
  - Nvidia Quadro P1000 w/4GB GDDDR5
- [Dell UltraSharp 27 Monitor: U2719D 1440P](https://www.dell.com/en-us/work/shop/dell-ultrasharp-27-monitor-u2719d/apd/210-arcv/monitors-monitor-accessories) - $379.99
- [Dell Business Dock - WD15](https://www.dell.com/en-us/work/shop/dell-business-dock-wd15-with-130w-adapter-with-dib-mdp-to-dp-cable-27ft-08m/apd/452-bddv/pc-accessories?ref=p13n_snp_results_mv&c=us&cs=04&l=en&s=bsd) - $182.99

Estimated Total: $2,754.72 (before tax)

#### Lenovo Option:

- [Lenovo ThinkPad X1 Extreme](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/ThinkPad-X1-Extreme/p/20MF000BUS) - $1,871.10
  - Intel Core i7-8750H (6 cores)
  - 16 GB DDR4 2666MHz
  - 512 GB Solid State Drive, PCIe-NVME OPAL2.0 M.2
  - 15.6" FHD (1920 x 1080) IPS Display
  - NVIDIA GeForce GTX 1050Ti 4GB
- [ThinkVision P27h-10 27 inch Wide QHD IPS Type-C Monitor](https://www.lenovo.com/us/en/accessories-and-monitors/monitors/professional/P27h-10A16270QP127inch-Monitor-HDMI/p/61AFGAR1US) - $268.99
- [ThinkPad Thunderbolt Dock](https://www.lenovo.com/us/en/accessories-and-monitors/docking/universal-cable-docks-thunderbolt/Thunderbolt-Dock-US/p/40AC0135US) - $244.99

Estimated Total: $2,385.08 (before tax)

## Wrap-up

To repeat the refrain throughout the article: give developers choice. Computers in our profession are highly personal items which we spend a huge amount of time on. We should have a reasonable ability to choose what fits best with our personality and working style. I hope this is helpful to someone out there! Please feel free to leave comments and feedback.