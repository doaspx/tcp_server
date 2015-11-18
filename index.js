/**
 * Created by zhanghongtao on 2015/11/18.
 */
var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

// ����һ��TCP������ʵ��������listen������ʼ����ָ���˿�
// ����net.createServer()�Ļص���������Ϊ��connection���¼��Ĵ�����
// ��ÿһ����connection���¼��У��ûص��������յ���socket������Ψһ��
net.createServer(function(sock) {

    // ���ǻ��һ������ - �������Զ�����һ��socket����
    console.log('CONNECTED: ' +
        sock.remoteAddress + ':' + sock.remotePort);

    // Ϊ���socketʵ�����һ��"data"�¼�������
    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // �ط������ݣ��ͻ��˽��յ����Է���˵�����
        sock.write('You said "' + data + '"');
    });

    // Ϊ���socketʵ�����һ��"close"�¼�������
    sock.on('close', function(data) {
        console.log('CLOSED: ' +
            sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);