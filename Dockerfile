FROM python:3.9-alpine

WORKDIR /tibbiyot_back

COPY . . 

RUN pip install -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

EXPOSE 8000
