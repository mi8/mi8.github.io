---
author: abdel
layout: post-full-no-image
title: Create Post
featimg: default.png
tags: [text]
category: [standard]
---


Here you can see the basic post. No fancy type, no setting and the featured image is just embedded into the content.
The front matter for that basic post just consists of the basic tags, author, title, featimg, tags and category

<p><br /></p>
<hr>

## HighLight code ##
<h5>C# code.</h5>

{% highlight C# %}
	// A Hello World! program in C#.
	using System;
	namespace HelloWorld
	{
	    class Hello 
	    {
	        static void Main() 
	        {
	            Console.WriteLine("Hello World!");

	            // Keep the console window open in debug mode.
	            Console.WriteLine("Press any key to exit.");
	            Console.ReadKey();
	        }
	    }
	}
{% endhighlight %}

<h5>Xaml code.</h5>

{% highlight xml %}
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="XamlSamples.HelloXamlPage"
             Title="Hello XAML Page"
             Padding="10, 40, 10, 10">

  <Label Text="Hello, XAML!"
         VerticalOptions="Start"
         HorizontalTextAlignment="Center"
         Rotation="-15"
         IsVisible="true"
         FontSize="Large"
         FontAttributes="Bold"
         TextColor="Aqua" />

</ContentPage>
{% endhighlight %}

<h5>Java code "Android".</h5>

{% highlight java %}
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:tools="http://schemas.android.com/tools"
   android:layout_width="match_parent"
   android:layout_height="match_parent" >
   
   <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_centerHorizontal="true"
      android:layout_centerVertical="true"
      android:padding="@dimen/padding_medium"
      android:text="@string/hello_world"
      tools:context=".MainActivity" />
      
</RelativeLayout>
{% endhighlight %}

<h5>Objective-C code "iOS".</h5>

{% highlight objc %}
// First program example

#import <Foundation/Foundation.h>

int main (int argc, const char * argv[])
{
        NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
        NSLog (@"Hello, World!");
        [pool drain];
        return 0;
}
{% endhighlight %}

<h5>Javascript code.</h5>

{% highlight javascript %}
	var i = 10;
	if (i < 5) {
	document.write("Hello World!")
	}
{% endhighlight %}


<h5>Ruby code.</h5>

{% highlight ruby %}
	# make some nice lexed html
	source = File.read('/etc/bashrc')
	formatter = Rouge::Formatters::HTML.new
	lexer = Rouge::Lexers::Shell.new
	formatter.format(lexer.lex(source))

	# Get some CSS
	Rouge::Themes::Base16.mode(:light).render(scope: '.highlight')
	# Or use Theme#find with string input
	Rouge::Theme.find('base16.light').render(scope: '.highlight')
{% endhighlight %}



<p><br /></p>
<hr>


## Text ##
                        

<h1 id="heading-1">Heading 1</h1>

<h2 id="heading-2">Heading 2</h2>

<h3 id="heading-3">Heading 3</h3>

<h4 id="heading-4">Heading 4</h4>

<h5 id="heading-5">Heading 5</h5>

<h6 id="heading-6">Heading 6</h6>

<p><br /></p>

<h6 id="text">text</h6>

<p>some <strong>bold</strong> and <em>italic</em> text and a <a href="/">link</a> that brings you back to the home page and a paragraph of lorem ipsum.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo nam commodi eos cumque possimus error cupiditate iste doloribus aut porro, beatae impedit, corporis sapiente laudantium id voluptatem sit distinctio sed sequi accusantium molestias, facilis sunt eum? Voluptates sit numquam, recusandae deleniti illo, nisi maxime sequi eligendi ad veniam quidem molestias aut assumenda doloremque delectus modi animi. Sint asperiores minus ducimus aut aliquid eos pariatur, id doloribus rem natus quam, adipisci reprehenderit? Architecto quis dignissimos porro pariatur impedit at odio illo ab sunt obcaecati eius consectetur distinctio, eligendi fuga sint fugit aspernatur ratione blanditiis veniam voluptates? Delectus magni optio voluptate odit incidunt nobis officiis mollitia fuga libero, reprehenderit fugit.</p>

<p>Hic eos earum ipsum, reprehenderit, ut facere officiis vitae voluptas sunt atque quisquam, nobis deleniti sapiente laudantium quia libero nulla rerum beatae mollitia iusto similique! Nesciunt illo, harum facilis aperiam commodi. Amet perferendis voluptatem, itaque laboriosam, eos minima vero tempore at!</p>

<p><br /></p>

<h6 id="blockquote">blockquote</h6>

<blockquote>
  <p>This is in a blockquote
  and a second line</p>
</blockquote>

<p><br /></p>

<h4 id="footnotes1">footnotes<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup></h4>

<p>Footnotes are also part of markdown features. So easy to create!</p>

<p><br /></p>

<h6 id="lists">lists</h6>
<ol>
  <li>this</li>
  <li>is</li>
  <li>an</li>
  <li>ordered</li>
  <li>list</li>
</ol>

<ul>
  <li>and</li>
  <li>this</li>
  <li>an</li>
  <li>unordered</li>
  <li>list</li>
</ul>

<p><br /></p>
<p><br /></p>


<p><br /></p>
<hr>


## Table ##

<h4 id="tables">tables</h4>

<table>
  <thead>
    <tr>
      <th>table heading 1</th>
      <th>table heading 2</th>
      <th>table heading 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>row 1 content 1</td>
      <td>row 1 content 2</td>
      <td>row 1 content 3</td>
    </tr>
    <tr>
      <td>row 2 content 1</td>
      <td>row 2 content 2</td>
      <td>row 2 content 3</td>
    </tr>
    <tr>
      <td>row 3 content 1</td>
      <td>row 3 content 2</td>
      <td>row 3 content 3</td>
    </tr>
  </tbody>
</table>

<p><br /></p>
<hr>


## Size image ##

<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_10 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_20 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_30 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_40 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_50 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_60 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_70 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_80 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_90 centerimage">
<img src="{{ site.baseurl | replace: '//', '/' }}/img/09.jpg" class="featimg_100 centerimage">

<p><br /></p>
<hr>


## Alignment image ##

{% highlight html %}
<!-- center -->
<img src="url" class="centerimage">

<!-- right -->
<img src="url" class="rightimage">
{% endhighlight %}





