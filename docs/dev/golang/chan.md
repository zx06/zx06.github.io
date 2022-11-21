---
title: 深入理解Golang的Channel
---

# channel是什么

channel是golang用于并发安全发送接收消息的消息队列。golang推荐使用通信而不是共享变量的形式实现资源同步，而channel就是用来通信的管道。

# channel的类型，无缓冲channel和有缓冲channel

无缓冲channel是指缓冲区大小为0的channel，接收者会阻塞知道收到消息，发送者也会阻塞知道接收者接收到消息，使用无缓冲channel时协程其实是以同步阻塞的形式去调用。
有缓冲channel则只会在缓冲区满的情况下才会阻塞发送者。

这里有两张张图形象描述了两种channel
![无缓冲channel](https://www.ardanlabs.com/images/goinggo/Screen+Shot+2014-02-16+at+10.10.54+AM.png)
![有缓冲channel](https://www.ardanlabs.com/images/goinggo/Screen+Shot+2014-02-17+at+8.38.15+AM.png)

引用自[The Nature Of Channels In Go](https://www.ardanlabs.com/blog/2014/02/the-nature-of-channels-in-go.html)

