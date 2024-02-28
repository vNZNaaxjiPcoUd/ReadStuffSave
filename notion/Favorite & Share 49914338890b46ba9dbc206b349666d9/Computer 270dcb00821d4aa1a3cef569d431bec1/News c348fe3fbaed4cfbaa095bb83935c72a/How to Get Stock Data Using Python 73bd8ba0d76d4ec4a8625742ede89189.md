# How to Get Stock Data Using Python

[I’ve been pretty interested in stock data lately; seeing if I can pick a 
carefully chosen selection of stocks capable of giving modest returns in
 the medium term. I’m hoping to write a whole article on the strategy I 
came up with, but first, I wanted to share how to even get stock price 
data in the first place so you can conduct similar analyses for 
yourself!](https://towardsdatascience.com/how-to-get-stock-data-using-python-c0de1df17e75)

It turns out that using the very convenient Python library called ***yfinance***, this task becomes really easy.

To
 motivate the problem, let’s say we’re interested in getting stock price
 data for Microsoft (stock ticker MSFT) for the last 10 years.

First, we’ll install the yfinance library:

- Open up your Anaconda Prompt or other command prompt and type: ***pip install yfinance***

Then, here is the basic code you need to collect historical stock data for Microsoft:

The key arguments here are:

- **period**: the frequency at which to gather the data; common options would include ‘1d’ (daily), ‘1mo’ (monthly), ‘1y’ (yearly)
- **start**: the date to start gathering the data. For example ‘2010–1–1’
- **end**: the date to end gathering the data. For example ‘2020–1–25’

Your result should be a Pandas dataframe containing daily historical stock price data for Microsoft. Key fields include:

- **Open**: the stock price at the beginning of that day/month/year
- **Close**: the stock price at the end of that day/month/year
- **High**: the highest price the stock achieved that day/month/year
- **Low**: the lowest price the stock achieved that day/month/year
- **Volume:** How many shares were traded that day/month/year

You can use the resulting dataframe to create charts like this:

![https://miro.medium.com/max/1256/1*wnjykv6Bl0eitEV3ftZJZg.png](https://miro.medium.com/max/1256/1*wnjykv6Bl0eitEV3ftZJZg.png)

Although *history *****is the most common function of the yfinance library, there are some others that I wanted to mention as well.

## info

For
 many tickers, you can get valuable information on the company as a 
whole such as geographic location, website, business summary, etc.

## calendar

You can also use the yfinance library to get upcoming earnings events regarding the company.

## recommendations

Finally, you can use the recommendations attribute to see how analysts have been rating this stock.

And that’s all! Hopefully, this helps you get started on conducting your own stock data analyses.

***Thanks for reading and until next time! ~***