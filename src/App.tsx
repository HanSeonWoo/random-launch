import { useState } from 'react'
import _ from 'lodash'
import './App.css'

interface HistoryEntry {
  teams: string[][];
  timestamp: string;
}

const DEFAULT_MEMBERS = ['양현모', '오명진', '권금이', '장찬희', '한선우', '정수현', '이재현', '김광섭', '김종관', '김진홍', '안의성'];

function App() {
  const [members, setMembers] = useState<string[]>(DEFAULT_MEMBERS);
  const [teams, setTeams] = useState<string[][]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const editMember = (index: number, newName: string): void => {
    const newMembers = [...members];
    newMembers[index] = newName;
    setMembers(newMembers);
  };

  const addMember = (): void => {
    setMembers([...members, `직원${members.length + 1}`]);
  };

  const removeMember = (index: number): void => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  const generateTeams = (): void => {
    const shuffled = _.shuffle([...members]);
    const midpoint = Math.ceil(shuffled.length / 2);
    
    const team1 = shuffled.slice(0, midpoint);
    const team2 = shuffled.slice(midpoint);
    
    const newTeams = [team1, team2];
    setTeams(newTeams);
    
    // 히스토리에 팀 구성 저장 (최대 10개)
    const timestamp = new Date().toLocaleString();
    setHistory(prev => [{teams: newTeams, timestamp}, ...prev].slice(0, 10));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md font-['Pretendard','Noto_Sans_KR',sans-serif]">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">랜덤 점심 팀 생성기</h1>
      
      {/* 팀원 관리 섹션 */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">팀원 명단 (총 {members.length}명)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          {members.map((member, index) => (
            <div key={index} className="flex items-center border rounded p-2 bg-white shadow-sm">
              <input
                type="text"
                value={member}
                onChange={(e) => editMember(index, e.target.value)}
                className="flex-grow border-none focus:outline-none text-gray-800 font-medium"
              />
              <button
                onClick={() => removeMember(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addMember}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors shadow-sm font-medium"
        >
          팀원 추가
        </button>
      </div>
      
      {/* 팀 생성 버튼 */}
      <div className="mb-6 text-center">
        <button
          onClick={generateTeams}
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors shadow-md font-semibold"
        >
          랜덤 팀 생성하기
        </button>
      </div>
      
      {/* 생성된 팀 보여주기 - 형식 변경 */}
      {teams.length > 0 && (
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">오늘의 점심 팀</h2>
          
          {/* 팀 결과를 텍스트 형식으로 표시 */}
          <div className="space-y-4">
            <div className="p-4 bg-blue-100 rounded-lg">
              <p className="text-lg font-medium text-blue-800">
                팀1({teams[0].length}명): {teams[0].join(', ')}
              </p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg">
              <p className="text-lg font-medium text-green-800">
                팀2({teams[1].length}명): {teams[1].join(', ')}
              </p>
            </div>
          </div>
          
          {/* 복사 버튼 추가 */}
          <div className="mt-4 text-center">
            <button 
              onClick={() => {
                const result = `팀1(${teams[0].length}명): ${teams[0].join(', ')}\n팀2(${teams[1].length}명): ${teams[1].join(', ')}`;
                navigator.clipboard.writeText(result);
                alert('팀 구성이 클립보드에 복사되었습니다!');
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-white rounded font-medium transition-colors"
            >
              결과 복사하기
            </button>
          </div>
        </div>
      )}
      
      {/* 이전 팀 구성 히스토리 - 형식 변경 */}
      {history.length > 1 && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">이전 팀 구성 히스토리</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {history.slice(1).map((entry, historyIndex) => (
              <div key={historyIndex} className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-sm text-gray-600 mb-2">{entry.timestamp}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">팀1({entry.teams[0].length}명):</span> {entry.teams[0].join(', ')}
                  </p>
                  <p className="text-sm text-green-700">
                    <span className="font-medium">팀2({entry.teams[1].length}명):</span> {entry.teams[1].join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App