run:
	sudo npm start

clean:
	rm -f *.exe

clean-all: 
	rm -f *.o
	rm -f *.exe

view-project:
	firefox https://github.com/kaleemullah360/rTGS &

view-profile:
	firefox https://github.com/kaleemullah360 &

ifeq ($(c),)
 c = 'updates'
endif

push:
	git add -A
	git commit -m $(c)
	git push origin rtgs-v.one

pull:
	git pull origin rtgs-v.one

setup-project:
	sudo bash ./runonce.sh