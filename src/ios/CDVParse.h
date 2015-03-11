#import <Cordova/CDVPlugin.h>

@interface CDVParse : CDVPlugin
{}

- (void)greet:(CDVInvokedUrlCommand*)command;

- (void)facebookLogin:(CDVInvokedUrlCommand*)command;

- (void)logout:(CDVInvokedUrlCommand*)command;

@end