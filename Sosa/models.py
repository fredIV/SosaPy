from django.db import models

# Create your models here.
class admin(models.Model):
    uemail = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

class board(models.Model):
    backgroundpath = models.CharField(max_length=50)
    boardtiltX = models.DecimalField()
    boardtiltY = models.DecimalField()
    boardRotate = models.IntegerField()
    boardR = models.IntegerField()
    boardG = models.IntegerField()
    boardB = models.IntegerField()

class experiment(models.Model):
    adminid = models.IntegerField()
    boardid = models.IntegerField()
    stimsetid = models.IntegerField()

class results(models.Model):
    experimentid = models.IntegerField()
    userkey = models.CharField(max_length=255)
    boardid = models.IntegerField
    stimsetid = models.IntegerField
    adminid = models.IntegerField


class stim(models.Model):
    stimpath = models.CharField(max_length=255)
    stimR = models.IntegerField()
    stimG = models.IntegerField()
    stimB = models.IntegerField()
    stimrotate = models.DecimalField()
    stimsetID = models.IntegerField()

class stimResults(models.Model):
    stimsetID = models.IntegerField()
    stimR = models.IntegerField()
    stimG = models.IntegerField()
    stimB = models.IntegerField()
    stimrotate = models.DecimalField()
    stimpath = models.CharField(max_length=50)
    stimX = models.DecimalField()
    stimY = models.DecimalField()

class stimSet(models.Model):
    adminID = models.IntegerField()
    path = models.CharField()

