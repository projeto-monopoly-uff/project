import pygame
from pygame.locals import *
from sys import exit 

pygame.init()

largura = 640
altura = 480
tela = pygame.display.set_mode((largura, altura))

while True:
    for evento in pygame.event.get():
        if evento.type == QUIT:
            pygame.quit()
            exit()
    pygame.display.update() 