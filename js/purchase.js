





//mui初始化
			mui.init();
			var subpages = ['Yec.html', 'Genj.html', 'Qieg.html','Liaol.html'];
			var subpage_style = {
				top: '64px',
				bottom: '0px'
				left:'25%'
				right:'0px'
			};
			
			var aniShow = {};
			
			 //创建子页面，首个选项卡页面显示，其它均隐藏；
			mui.plusReady(function() {
				var self = plus.webview.currentWebview();
				for (var i = 0; i < 3; i++) {
					var temp = {};
					var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
					if (i > 0) {
						sub.hide();
					}else{
						temp[subpages[i]] = "true";
						mui.extend(aniShow,temp);
					}
					self.append(sub);
				}
			});
			 //当前激活选项
			var activeTab = subpages[0];
			
			var title = document.getElementById("title");
			 //选项卡点击事件
			mui('.mui-bar-tab').on('tap', 'a', function(e) {
				var targetTab = this.getAttribute('href');
				if (targetTab == activeTab) {
					return;
				}
			
			
				

			
			
			
			
			
			
			
			
			
			
//			var controls = document.getElementById("segmentedControls");
////			var contents = document.getElementById("segmentedControlContents");
//			var tittlename = document.getElementById("xcs-classname");
//			var html = [];
//			var classname=['叶菜类','根茎类' ,'茄果类','料理包'];
//			var i = 1,
//				j = 1,
//				m = 5, //左侧选项卡数量+1
//				n = 4; //每个选项卡列表数量+1
//			for (; i < m; i++) {
//				html.push('<a class="mui-control-item" href="#content' + i + '">'+classname[i-1]+'</a>');
//				
//				
//			}
//			controls.innerHTML = html.join('');
//			 
			
//			controls.addEventListener('tap',function(){
//			
//			console.log(this.innerText);	
//			
//		});
//			
			
			
			
			
			
//			html = [];
//			img=[]
//			
//			for (i = 1; i < m; i++) {
//				html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
//				for (j = 1; j < n; j++) {
//					html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
//				}
//				html.push('</ul></div>');
//			}
//			contents.innerHTML = html.join('');
//			 //默认选中第一个
//			controls.querySelector('.mui-control-item').classList.add('mui-active');
//			contents.querySelector('.mui-control-content').classList.add('mui-active');
			
