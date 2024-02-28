# ngrok - secure introspectable tunnels to localhost

[https://ngrok.com/product](https://ngrok.com/product)

Ngrok exposes local servers behind NATs and firewalls to the public internet over secure tunnels.

[Sign up](https://dashboard.ngrok.com/signup)

![ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/product-diagram.svg](ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/product-diagram.svg)

### how it works

![ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/download.svg](ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/download.svg)

Download and run a program on your machine and provide it the port of a network service, usually a web server.

![ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/Group-31.svg](ngrok%20-%20secure%20introspectable%20tunnels%20to%20localhost%206ec77b4813024763b649adc2344d82f1/Group-31.svg)

Connect to the ngrok cloud service which accepts traffic on a public address.

Traffic is relayed through to the ngrok process running on your machine and then on to the local address you specified.

### What it's good for

### Run personal cloud services from your home

### Test mobile apps connected to your locally running backend

## A few great features

Instantly create a public HTTPS url for a website running locally on your development machine. ngrok offloads TLS so you don't have to worry about your configuration.

Set HTTP auth credentials to protect access to your tunnel and those you share it with. ngrok also supports other authentication methods. Add OAuth to your endpoints automatically; no code required.

### developer friendly

ngrok tunnels run using an optimized version of the technology that powers HTTP/2 so that your tunneled services load fast. ngrok runs in multiple regions and availability zones around the globe, ensuring that your tunnels are always online.

Rewrite the Host header of tunneled requests to target a specific site in your WAMP/MAMP/Pow development environment.

Don't configure port forwarding on your router or waste time setting up dynamicDNS solutions. ngrok works everywhere with no changes, even when a device changes networks.

### be more productive

Use ngrok's web inspection interface to understand the HTTP request and response traffic over your tunnel.

Use ngrok URLs to configure public webhooks to a private service. Easily develop and debug webhook integrations by simply 'replaying' webhook requests to your dev server.

### multiple protocol support

Expose any networked service to the internet, even ones that don't use HTTP like SSH. Use ngrok to manage access to any TCP service without having to setup complicated port forwarding rules.

ngrok supports both HTTP and HTTPS tunnels out of the box. Great for sharing local web servers, demoing a development website, or sharing access to internal APIs with 3rd parties.

## ngrok paid plans

*Some features are only available with a paid plan. Here is a list of those features.*

### reserved tunnels

Reserve your ngrok.io subdomains so that they are never provisioned to another user and are always available for your use. This allows you to stop and restart your tunnels at will and always maintain a persistent endpoint for your clients.

### domain customization

Your app will appear on https://myapp.ngrok.io instead of on a randomly chosen subdomain. These subdomains are reserved for your account and give you a persistent endpoint to drop into your clients.

Go one step further and run tunnels over your own domain names! CNAME your own domain to your reserved ngrok tunnel and easily put the power of ngrok behind your own brand.

### greater control

Tunnel HTTPS (or other TLS) traffic to your local services end-to-end encrypted with your own SSL certificate and private key. You can even run them over your own domains!

Whitelist access to your tunnel endpoints by IP address or IP range for additional security of your tunneled services. Prevent unauthorized clients from ever connecting to your tunnel endpoints.

### guaranteed scale

Paid plans offer higher throughput and resource limits across all of ngrok's feature set. ngrok's plans are designed to scale with your needs and guarantee that as your traffic ramps, up ngrok's features scale with you.

### Can I programmatically manage hundreds of ngrok processes or more?

Yes. ngrok link is a set of custom plans and additional features that allow you to use ngrok to manage connectivity to hundreds or thousands of devices or for targeted access into customer networks as a lightweight alternative to VPN. [Contact sales](https://ngrok.com/enterprise/contact) for more details.

### Can I run my own ngrok server?

Yes, kind of. You may license a dedicated installation of the ngrok server cluster for commercial use. You provide us with keys to an AWS account and we will install the server cluster software into that account. We then provide on-going maintenance, operations, updates, monitoring and support for your dedicated cluster. Please contact sales for further details. It is not currently possible to license an on-prem version of the ngrok software to operate yourself, although feel free to get in touch if you're interested in that.