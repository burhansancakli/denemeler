#!/bin/sh

FILE=./download.log

# url to retrieve
TRAIN_IMG_URL="https://www.dropbox.com/s/h5yora9j0onglw6/train.zip?dl=0"
TRAIN_EMB_URL="https://www.dropbox.com/s/wnqdznmlhkybfbo/train_emb.zip?dl=0"
TEST_IMG_URL="https://www.dropbox.com/s/c94io61nmldcgv8/test.zip?dl=0"
TEST_EMB_URL="https://www.dropbox.com/s/l0n37n0ryy0o4ca/test_emb.zip?dl=0"

# retrieve the web page using curl. time the process with the time command.
curl --connect-timeout 5000 $TRAIN_IMG_URL
curl --connect-timeout 5000 $TRAIN_EMB_URL
curl --connect-timeout 5000 $TEST_IMG_URL
curl --connect-timeout 5000 $TEST_EMB_URL
