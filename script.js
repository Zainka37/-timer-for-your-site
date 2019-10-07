// ������������� �������� ���� ������� 
let deadline = "2019-10-08";
// ������ ������� ����� �������� ����� � �������.��������� ������ � ����(�����) � �������� �� ������� ���������� ���,������, �������. 
function getTimeRemaning(endtime){
	let t = Date.parse(endtime) - new Date(),
	second = Math.floor((t/1000) % 60),
	minute = Math.floor((t/1000/60) % 60),
	hours = Math.floor((t/(1000*60*60)));
   
	return {
		'total':t,
		'second' :second,
		'minute' : minute,
		'hours' : hours
	};
   }


// �������� �������� � DOM, ������������� ��������� ������ �������(updateClock).
function setClock(id,endtime){
	let timer = document.getElementById(id),
		hours = timer.querySelector(".hours"),
		minutes = timer.querySelector(".minutes"),
		seconds = timer.querySelector(".seconds"),
		timeInterval = setInterval(updateClock , 1000);
// ��������� � ���������� ��������� ������ ������ getTimeRemaning � ����������� ������������ ����� � �� ������� � HTML.


	function updateClock(){
			let t = getTimeRemaning(endtime);
// ������ 4:13:2 �� 04:13:02
		(t.hours < 10)?	hours.textContent ='0'+ t.hours:hours.textContent = t.hours;	
	
		(t.minute < 10)? minutes.textContent = '0'+ t.minute:minutes.textContent = t.minute; 
		
		(t.second < 10)? seconds.textContent ='0'+t.second:seconds.textContent = t.second;
	
		console.log(typeof(t.second));
//���������, ���� ������� ������, ������������� ��������� ������.
		if(t.total <= 0){
			clearInterval(timeInterval);
			hours.textContent ='00';
			minutes.textContent = '00';
			seconds.textContent ='00';

		}
	}		


}

setClock('timer' , deadline);
