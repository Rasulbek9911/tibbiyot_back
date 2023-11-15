FROM python:3.9-alpine

WORKDIR /tibbiyot_back

COPY . . 

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT [ "./entrypoint.sh" ]