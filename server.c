#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <pthread.h>
#include <unistd.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/tcp.h>

#define PORT 8080

int startServer()
{
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    addr.sin_addr.s_addr = INADDR_ANY;
    bind(sock, (struct sockaddr*)&addr, sizeof(addr));
    int opt = 1;
    setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    return sock;
}

char* handleRequest(char* request)
{
    return "Hello, World!\n";
}

int main()
{
    printf("*** Spheem Server ***\n");
    int sock = startServer();
    bool loop = true;
    while (loop)
    {
        listen(sock, 1);
        int client = accept(sock, NULL, NULL);
        char reqBuffer[100];
        recv(client, reqBuffer, sizeof(reqBuffer), 0);
        printf("request: %s\n", reqBuffer);
        char respBuffer[1000];
        char* body = handleRequest(reqBuffer);
        const char* FORMAT = "HTTP/1.1 200 OK\r\n Access-Control-Allow-Origin : *\r\n Content-Type: text/plain\r\n Content-Length: %lu\r\n\r\n%s";
        snprintf(respBuffer, sizeof(respBuffer), FORMAT, strlen(body), body);
        send(client, respBuffer, strlen(respBuffer), 0);
        printf("response: %s\n", respBuffer);
        fflush(stdout);
        //close(client);
    }
    return 0;
}
