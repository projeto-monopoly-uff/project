import pygame
from sys import exit # permits the exit work

pygame.init()
#opens the screen and define the size width x height
screen = pygame.display.set_mode((510,510))
#displays the name of the software:
pygame.display.set_caption("Monopoly")
clock = pygame.time.Clock() # to be abe to define the frame rate

test_surface = pygame.image.load("Pictures\Template\Template1.png")
#test_surface = pygame.image.load()#creates surface and define size
#test_surface.fill("Red")

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()#the x box can quit the screen
            exit()#exit stops the loop while True

    #put one surface on another surface
    screen.blit(test_surface, (0,0))#block image transfer, pass argument and set the position 
    

    pygame.display.update()#keep the screen running
    clock.tick(20) #defines the maximum frame rate of while True
