#!/bin/bash

while getopts e:h:a: flag
do
    case "${flag}" in
        n) env=${OPTARG};;
        h) host=${OPTARG};;
        a) asset_prefix=${OPTARG};;
    esac
done

echo "ENV=$env" > .env
echo "NEXT_PUBLIC_HOST=$host" >> .env
echo "NEXT_PUBLIC_ASSET_PREFIX=$asset_prefix" >> .env
